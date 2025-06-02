import React, { useState, useEffect } from 'react';
import MetadataSidebar from './components/MetadataSidebar';
import Feedback from './components/Feedback';
import TraceInfo from './components/Traceinfo';
import GrafanaEmbed from './components/GrafanaEmbed';
import ToxicityStatus from './components/ToxicityStatus';

function App() {
  const fakeTraceId = "abc-123";
  const fakeToxicityStatus = "Safe";
  // State to hold the data fetched from the backend API
  const [latency, setLatency] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [traceId, setTraceId] = useState('');
  const [toxicity, setToxicity] = useState(false);
  const [hallucination, setHallucination] = useState(false);

  // Example: simulate fetching data from API
  useEffect(() => {
    // Fetch data here, then set the states
    // e.g. fetch('http://backend/api/genai-response')
    // For now, use dummy data
    setLatency(120);
    setTokens(350);
    setTraceId('abc123xyz');
    setToxicity(true);
    setHallucination(false);
  }, []);

  // Handle feedback submission
  function handleFeedbackSubmit(feedbackData) {
    // POST feedback to backend
    fetch('http://backend-url/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed');
        alert('Thanks for your feedback!');
      })
      .catch(() => alert('Error submitting feedback'));
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>AI Observability Dashboard</h1>

      <section style={sectionStyle}>
        <TraceInfo traceId={fakeTraceId} />
      </section>

      <section style={sectionStyle}>
        <ToxicityStatus status={fakeToxicityStatus} />
      </section>

      <section style={sectionStyle}>
        <Feedback traceId={fakeTraceId} />
      </section>

      <section style={sectionStyle}>
        <GrafanaEmbed />
      </section>
    </div>
  );
}

const sectionStyle = {
  marginBottom: '2rem',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9'
};


export default App;
