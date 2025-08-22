// server.js
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const createPrompt = (data) => {
  const skillsText = Object.entries(data.skillProficiency || {})
    .map(([skill, proficiency]) => `- ${skill}: ${proficiency}`)
    .join('\n');

  return `
  You are an expert career development coach. Based on the following user assessment, create a personalized, actionable, and step-by-step career development roadmap. The roadmap should be structured with clear headings, bullet points, and realistic timelines.

  **User's Career Assessment Data:**
  
  **1. Career Goals:**
  - Target Role: ${data.targetRole || 'Not specified'}
  - Top 3 Priorities: ${data.priorities?.join(', ') || 'Not specified'}

  **2. Interests & Passions:**
  - Tasks they find energizing: ${data.energizingTasks?.join(', ') || 'Not specified'}
  - Industries they are passionate about: ${data.passionateIndustries?.join(', ') || 'Not specified'}

  **3. Current Skills Profile:**
  - Assessed Skill Proficiency:
  ${skillsText || 'No skills provided'}
  - Other skills or projects they are proud of: ${data.extraSkills || 'None'}

  **4. Learning Style & Constraints:**
  - Preferred learning methods: ${data.learningStyle?.join(', ') || 'Not specified'}
  - Weekly time commitment for learning: ${data.weeklyHours || 'Not specified'} hours
  - Budget for learning materials: ${data.budget || 'Not specified'}

  **Task:**
  Generate the career roadmap based on this data. The tone should be encouraging and professional. Recommend specific types of projects, courses, or skills to focus on.
  `;
};

app.post('/api/generate-roadmap', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    const prompt = createPrompt(formData);
    console.log('Generated Prompt:', prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedRoadmap = response.text();

    res.json({ roadmap: generatedRoadmap });

  } catch (error) {
    console.error('Error generating roadmap:', error);
    res.status(500).json({ error: 'Failed to generate roadmap. Please check the server logs.' });
  }
});

// --- Start the Server ---
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});