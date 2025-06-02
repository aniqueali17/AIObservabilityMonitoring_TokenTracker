import React from 'react';

function MetadataSidebar({ latency, tokens }) {
  return (
    <div style={{ width: '250px', padding: '20px', background: '#f2f2f2' }}>
      <h3>Metadata</h3>
      <p>Latency: {latency} ms</p>
      <p>Tokens Used: {tokens}</p>
    </div>
  );
}

export default MetadataSidebar;