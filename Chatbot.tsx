import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Minimize2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatbotProps {
  language: 'es' | 'en';
  t: any;
}

export const Chatbot: React.FC<ChatbotProps> = ({ language, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t.chatbot.welcome }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fix: changed i-sTyping to isTyping in the dependency array to resolve compilation errors
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = (customMsg || input).trim();
    if (!userMsg || isTyping) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getGeminiResponse(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  const quickReplies = [
    { label: t.chatbot.quick.web, msg: language === 'es' ? 'Información sobre webs' : 'Web information' },
    { label: t.chatbot.quick.app, msg: language === 'es' ? 'Información sobre apps' : 'App information' },
    { label: t.chatbot.quick.auto, msg: language === 'es' ? 'Información sobre automatizar' : 'Automation information' },
    { label: t.chatbot.quick.time, msg: language === 'es' ? '¿Qué plazos tenéis?' : 'What are the deadlines?' },
    { label: t.chatbot.quick.trial, msg: language === 'es' ? 'Quiero mi web de prueba gratis' : 'I want my free trial web' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass w-[380px] h-[580px] rounded-[2.5rem] flex flex-col shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in duration-300 origin-bottom-right">
          <div className="p-6 bg-gradient-to-r from-cyan-600/90 to-blue-700/90 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest">IAzti Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-cyan-100 uppercase font-black tracking-widest opacity-80">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <Minimize2 className="w-5 h-5 text-white/70" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-950/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.8rem] px-5 py-3 text-base leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none font-medium' 
                    : 'glass text-slate-200 border-white/10 rounded-tl-none shadow-lg'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass px-5 py-4 rounded-[1.5rem] rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {!isTyping && (
            <div className="px-6 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((qr, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(qr.msg)}
                  className="text-[10px] font-black uppercase tracking-widest bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 py-2 px-3 rounded-full border border-white/10 transition-all"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          <div className="p-6 bg-slate-950/80 border-t border-white/5 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={language === 'es' ? "Escribe..." : "Write..."}
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-base text-white focus:outline-none focus:border-cyan-500 transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="p-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-all shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-[2rem] bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="relative">
            <MessageSquare className="w-8 h-8 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-[3px] border-slate-950 rounded-full" />
          </div>
        </button>
      )}
    </div>
  );
};