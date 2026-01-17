
import { Lead } from "../types";

/**
 * Note: Since we don't have the real env variables for the user yet,
 * we implement the logic but include safe defaults or mock logs.
 */

const N8N_WEBHOOK_URL = "https://n8n.iazti.web/webhook/new-lead";

export const submitLead = async (lead: Lead) => {
  console.log("Submitting lead to Supabase & n8n:", lead);

  // 1. Send to n8n for Google Sheets and Email notification
  try {
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  } catch (e) {
    console.error("n8n notification failed", e);
  }

  // 2. Mocking Supabase Insert (In a real app, use @supabase/supabase-js)
  // const { data, error } = await supabase.from('leads').insert([lead]);
  
  return { success: true };
};

export const uploadPDF = async (file: File) => {
  console.log("Uploading PDF to Supabase Storage:", file.name);
  // Implementation of storage upload logic
  return { success: true, url: "https://mock-storage.url/kb.pdf" };
};
