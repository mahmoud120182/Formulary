// ============================================================
//  SELF-CONTAINED POPUP MODULE (HTML + CSS + JS)
//  No external dependencies – works in any vanilla project.
// ============================================================

(function() {
  // -------- 1. Inject CSS styles --------
  const style = document.createElement('style');
  style.textContent = `
    /* ========== AVAILABILITY POPUP (MINIMALIST) ========== */
    .popup-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    .popup-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .popup-card {
      background: rgba(10, 10, 30, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 40px;
      max-width: 700px;
      width: 100%;
      padding: 60px 30px;
      text-align: center;
      box-shadow: 0 0 80px rgba(0, 150, 255, 0.3), 0 0 160px rgba(0, 80, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transform: scale(0.9) translateY(20px);
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
      opacity: 0;
      position: relative;
      overflow: hidden;
    }
    .popup-overlay.active .popup-card {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    /* Animated background glow */
    .popup-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 30% 50%, rgba(0, 150, 255, 0.15), transparent 60%);
      animation: rotateGlow 10s linear infinite;
      z-index: 0;
    }
    @keyframes rotateGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Close button */
    .popup-close {
      position: absolute;
      top: 18px;
      right: 22px;
      background: rgba(255, 255, 255, 0.08);
      border: none;
      color: rgba(255, 255, 255, 0.6);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
      backdrop-filter: blur(4px);
    }
    .popup-close:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      transform: rotate(90deg) scale(1.1);
    }

    /* Content */
    .popup-content {
      position: relative;
      z-index: 1;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    /* Main text */
    .main-text {
      font-size: clamp(1.8rem, 8vw, 4.5rem);
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #fff;
      text-shadow: 
        0 0 10px rgba(0, 180, 255, 0.8),
        0 0 20px rgba(0, 180, 255, 0.6),
        0 0 40px rgba(0, 100, 255, 0.4),
        0 0 80px rgba(0, 50, 255, 0.2);
      transform: perspective(800px) rotateX(4deg) rotateY(-4deg);
      animation: pulseGlow 2.5s ease-in-out infinite alternate, float 4s ease-in-out infinite;
      line-height: 1.2;
      margin-bottom: 10px;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    /* "and" span styling - different color */
    .and {
      color: #ffd700;
      text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
      display: inline-block;
      padding: 0 5px;
      animation: andPulse 2s ease-in-out infinite;
    }

    @keyframes andPulse {
      0%, 100% { 
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
      }
      50% { 
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.5), 0 0 80px rgba(255, 215, 0, 0.3);
      }
    }

    @keyframes pulseGlow {
      0% {
        text-shadow: 
          0 0 10px rgba(0, 180, 255, 0.8),
          0 0 20px rgba(0, 150, 255, 0.5),
          0 0 40px rgba(0, 80, 255, 0.2);
      }
      100% {
        text-shadow: 
          0 0 20px rgba(0, 255, 255, 1),
          0 0 40px rgba(0, 200, 255, 0.8),
          0 0 80px rgba(0, 100, 255, 0.6),
          0 0 120px rgba(0, 50, 255, 0.3);
      }
    }
    @keyframes float {
      0% { transform: perspective(800px) rotateX(4deg) rotateY(-4deg) translateY(0px); }
      50% { transform: perspective(800px) rotateX(4deg) rotateY(-4deg) translateY(-10px); }
      100% { transform: perspective(800px) rotateX(4deg) rotateY(-4deg) translateY(0px); }
    }

    /* Sub text: Now Available! */
    .sub-text {
      font-size: clamp(1.2rem, 5vw, 3rem);
      font-weight: 800;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f7971e, #ffd200, #f7971e);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: shimmer 3s ease-in-out infinite, floatSub 5s ease-in-out infinite;
      text-shadow: 0 0 40px rgba(255, 215, 0, 0.3);
      display: inline-block;
      padding: 0 20px;
      overflow-wrap: break-word;
      word-break: break-word;
    }
    @keyframes shimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatSub {
      0% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-5px) scale(1.02); }
      100% { transform: translateY(0px) scale(1); }
    }

    /* Responsive fine-tune */
    @media (max-width: 600px) {
      .popup-card {
        padding: 40px 20px;
        border-radius: 28px;
      }
      .popup-close {
        top: 12px;
        right: 14px;
        width: 34px;
        height: 34px;
        font-size: 16px;
      }
      .main-text {
        font-size: clamp(1.5rem, 6vw, 2.8rem);
        letter-spacing: 1px;
      }
      .sub-text {
        font-size: clamp(1rem, 4vw, 2rem);
      }
    }
    @media (max-width: 400px) {
      .popup-card {
        padding: 30px 15px;
        border-radius: 20px;
      }
      .main-text {
        font-size: clamp(1.2rem, 5vw, 2.2rem);
        letter-spacing: 0;
      }
      .sub-text {
        font-size: clamp(0.9rem, 3.5vw, 1.6rem);
      }
    }
  `;
  document.head.appendChild(style);

  // -------- 2. Build HTML structure --------
  const popupHTML = `
    <div id="availabilityPopup" class="popup-overlay">
      <div class="popup-card">
        <button class="popup-close" id="popupCloseBtn" aria-label="Close">
          <i class="fas fa-times"></i>
        </button>
        <div class="popup-content">
          <h1 class="main-text">
            Zuclopenthixol 200 (Clopixol)<span class="  and  ">and</span> Haloperidol Retard
          </h1>
          <h2 class="sub-text">Now Available!</h2>
        </div>
      </div>
    </div>
  `;

  // Insert the popup just before the closing </body>
  const body = document.body;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = popupHTML;
  while (tempDiv.firstChild) {
    body.appendChild(tempDiv.firstChild);
  }

  // -------- 3. JavaScript logic --------
  const popup = document.getElementById('availabilityPopup');
  const closeBtn = document.getElementById('popupCloseBtn');

  function showAvailabilityPopup() {
    if (popup) {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideAvailabilityPopup() {
    if (popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Event listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', hideAvailabilityPopup);
  }
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) hideAvailabilityPopup();
    });
  }

  // Expose functions globally
  window.showAvailabilityPopup = showAvailabilityPopup;
  window.hideAvailabilityPopup = hideAvailabilityPopup;

  window.notifyClopixolAvailable = function() {
    showAvailabilityPopup();
  };
})();