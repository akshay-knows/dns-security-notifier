// Get current tab and display DNS status
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  
  // Request status from background script
  chrome.runtime.sendMessage(
    { action: 'getStatus', tabId: currentTab.id },
    (status) => {
      displayStatus(status, currentTab.url);
    }
  );
});

function displayStatus(status, url) {
  const container = document.getElementById('status-display');
  
  if (!url || url.startsWith('chrome://') || url.startsWith('edge://')) {
    container.className = 'status-container status-warning';
    container.innerHTML = `
      <div class="status-icon">ℹ️</div>
      <div class="status-title">System Page</div>
      <div class="status-description">DNS information not available for browser pages</div>
    `;
    return;
  }
  
  const isSecure = url.startsWith('https://');
  
  if (status.doh || isSecure) {
    container.className = 'status-container status-secure';
    container.innerHTML = `
      <div class="status-icon">🔒</div>
      <div class="status-title">DNS over HTTPS Active</div>
      <div class="status-description">Your DNS queries are encrypted and private</div>
    `;
  } else {
    container.className = 'status-container status-warning';
    container.innerHTML = `
      <div class="status-icon">⚠️</div>
      <div class="status-title">Plain DNS Detected</div>
      <div class="status-description">DNS queries may be visible to your ISP</div>
    `;
  }
}