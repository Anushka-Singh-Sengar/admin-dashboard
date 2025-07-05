import React, { useEffect, useState } from 'react';

const Settings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState({
    headerType: "ec-header-fixed",
    headerBackground: "ec-header-light",
    navigationType: "ec-sidebar-fixed",
    navigationBackground: "ec-sidebar-light",
    navigationSpacing: "default"
  });

  useEffect(() => {
    // Load settings from localStorage on component mount
    const savedSettings = localStorage.getItem("optionsObject");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    } else {
      // Set default settings
      localStorage.setItem("optionsObject", JSON.stringify(settings));
      applySettings(settings);
    }
  }, []);

  const applySettings = (newSettings) => {
    const body = document.body;
    
    // Apply header type
    body.classList.remove('ec-header-fixed', 'ec-header-static');
    body.classList.add(newSettings.headerType);
    
    // Apply header background
    body.classList.remove('ec-header-light', 'ec-header-dark');
    body.classList.add(newSettings.headerBackground);
    
    // Apply navigation type - exactly match template logic
    if (newSettings.navigationType === "ec-sidebar-fixed") {
      body.classList.remove('ec-sidebar-fixed-offcanvas', 'ec-sidebar-static', 'ec-sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out');
      body.classList.add('ec-sidebar-fixed');
      window.isMinified = false;
      window.isCollapsed = false;
    } else if (newSettings.navigationType === "ec-sidebar-fixed-minified") {
      body.classList.remove('ec-sidebar-fixed-offcanvas', 'ec-sidebar-static', 'ec-sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out');
      body.classList.add('ec-sidebar-fixed', 'sidebar-minified');
      window.isMinified = true;
      window.isCollapsed = false;
    } else if (newSettings.navigationType === "ec-sidebar-fixed-offcanvas") {
      body.classList.remove('ec-sidebar-static', 'ec-sidebar-static-offcanvas', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out', 'ec-sidebar-fixed');
      body.classList.add('ec-sidebar-fixed-offcanvas', 'sidebar-collapse');
      window.isMinified = false;
      window.isCollapsed = true;
    } else if (newSettings.navigationType === "ec-sidebar-static") {
      body.classList.remove('ec-sidebar-fixed-offcanvas', 'ec-sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified-out', 'ec-sidebar-fixed');
      body.classList.add('ec-sidebar-static');
      window.isMinified = false;
      window.isCollapsed = false;
    } else if (newSettings.navigationType === "ec-sidebar-static-minified") {
      body.classList.remove('ec-sidebar-fixed-offcanvas', 'ec-sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified-out', 'ec-sidebar-fixed');
      body.classList.add('ec-sidebar-static', 'sidebar-minified');
      window.isMinified = true;
      window.isCollapsed = false;
    } else if (newSettings.navigationType === "ec-sidebar-static-offcanvas") {
      body.classList.remove('ec-sidebar-fixed-offcanvas', 'ec-sidebar-static', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out', 'ec-sidebar-fixed');
      body.classList.add('ec-sidebar-static-offcanvas', 'sidebar-collapse');
      window.isMinified = false;
      window.isCollapsed = true;
    }
    
    // Apply navigation background
    body.classList.remove('ec-sidebar-light', 'ec-sidebar-dark');
    body.classList.add(newSettings.navigationBackground);
    
    // Apply spacing
    body.classList.remove('compact-spacing');
    if (newSettings.navigationSpacing === "compact-spacing") {
      body.classList.add('compact-spacing');
    }
    
    console.log('Applied settings:', newSettings);
    console.log('Body classes:', body.className);
  };

  const updateSetting = (propertyName, propertyValue) => {
    const newSettings = { ...settings, [propertyName]: propertyValue };
    setSettings(newSettings);
    localStorage.setItem("optionsObject", JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings = {
      headerType: "ec-header-fixed",
      headerBackground: "ec-header-light",
      navigationType: "ec-sidebar-fixed",
      navigationBackground: "ec-sidebar-light",
      navigationSpacing: "default"
    };
    setSettings(defaultSettings);
    localStorage.removeItem("optionsObject");
    localStorage.setItem("optionsObject", JSON.stringify(defaultSettings));
    applySettings(defaultSettings);
    window.location.reload();
  };

  const toggleSettings = () => {
    const newVisible = !isVisible;
    setIsVisible(newVisible);
    
    // Show/hide overlay
    const overlay = document.querySelector('.ec-tools-sidebar-overlay');
    if (overlay) {
      overlay.style.display = newVisible ? 'block' : 'none';
    }
  };

  const closeSettings = () => {
    setIsVisible(false);
    
    // Hide overlay
    const overlay = document.querySelector('.ec-tools-sidebar-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  };

  // Expose toggle function globally so both header and dropdown icons can use it
  useEffect(() => {
    window.toggleSettings = toggleSettings;
    return () => {
      delete window.toggleSettings;
    };
  }, [isVisible]);

  // Handle overlay click events
  useEffect(() => {
    const overlay = document.querySelector('.ec-tools-sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeSettings);
      return () => {
        overlay.removeEventListener('click', closeSettings);
      };
    }
  }, []);

  return (
    <>
      {/* Settings Panel */}
      {isVisible && (
        <>
          {/* Overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 555554
            }}
            onClick={closeSettings}
          ></div>

          {/* Settings Sidebar */}
          <div 
            style={{ 
              position: 'fixed',
              top: 0,
              right: 0,
              width: '315px',
              height: '100vh',
              backgroundColor: '#ffffff',
              borderLeft: '1px solid #f3f3f3',
              zIndex: 555555,
              overflowY: 'auto',
              boxShadow: '-2px 0 10px rgba(0,0,0,0.1)'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px 30px',
              borderBottom: '1px solid #f3f3f3',
              backgroundColor: '#ffffff',
              position: 'relative'
            }}>
              <h2 style={{ 
                color: '#56606e', 
                fontSize: '20px', 
                fontWeight: '200', 
                margin: '0 0 5px 0' 
              }}>
                SETTINGS
              </h2>
              <p style={{ 
                fontSize: '13px', 
                color: '#56606e', 
                margin: 0 
              }}>
                Layout Preview Settings
              </p>
              
              {/* Close Button */}
              <button
                onClick={closeSettings}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-40px',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '35px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #f3f3f3',
                  borderLeft: 'none',
                  borderBottomLeftRadius: '6px',
                  borderTopLeftRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#56606e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className="mdi mdi-window-close"></i>
              </button>
            </div>

            {/* Content */}
            <div style={{
              padding: '20px 30px',
              backgroundColor: '#ffffff'
            }}>
              <span 
                className="right-sidebar-2-subtitle"
                style={{ color: '#a6aab4', fontSize: '16px', display: 'block', marginBottom: '10px', marginTop: '10px' }}
              >
                Header Layout
              </span>
              <div 
                className="no-col-space"
                style={{ 
                  marginBottom: '30px', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <button
                  className={`btn-right-sidebar-2 ec-header-fixed-to ${settings.headerType === 'ec-header-fixed' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('headerType', 'ec-header-fixed')}
                  style={{
                    color: settings.headerType === 'ec-header-fixed' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '10px',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.headerType === 'ec-header-fixed' ? '#eee' : 'transparent'
                  }}
                >
                  Fixed
                </button>
                <button
                  className={`btn-right-sidebar-2 ec-header-static-to ${settings.headerType === 'ec-header-static' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('headerType', 'ec-header-static')}
                  style={{
                    color: settings.headerType === 'ec-header-static' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '0',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.headerType === 'ec-header-static' ? '#eee' : 'transparent'
                  }}
                >
                  Static
                </button>
              </div>

              <span 
                className="right-sidebar-2-subtitle"
                style={{ color: '#a6aab4', fontSize: '16px', display: 'block', marginBottom: '10px', marginTop: '10px' }}
              >
                Sidebar Layout
              </span>
              <div 
                className="no-col-space"
                style={{ 
                  marginBottom: '30px', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <select
                  className="right-sidebar-2-select"
                  value={settings.navigationType}
                  onChange={(e) => updateSetting('navigationType', e.target.value)}
                  style={{
                    width: '100%',
                    height: '31px',
                    borderRadius: '15px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    background: '#eee',
                    color: '#777777',
                    border: 'none'
                  }}
                >
                  <option value="ec-sidebar-fixed">Fixed Default</option>
                  <option value="ec-sidebar-fixed-minified">Fixed Minified</option>
                  <option value="ec-sidebar-fixed-offcanvas">Fixed Offcanvas</option>
                  <option value="ec-sidebar-static">Static Default</option>
                  <option value="ec-sidebar-static-minified">Static Minified</option>
                  <option value="ec-sidebar-static-offcanvas">Static Offcanvas</option>
                </select>
              </div>

              <span 
                className="right-sidebar-2-subtitle"
                style={{ color: '#a6aab4', fontSize: '16px', display: 'block', marginBottom: '10px', marginTop: '10px' }}
              >
                Header Background
              </span>
              <div 
                className="no-col-space"
                style={{ 
                  marginBottom: '30px', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <button
                  className={`btn-right-sidebar-2 ec-header-light-to ${settings.headerBackground === 'ec-header-light' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('headerBackground', 'ec-header-light')}
                  style={{
                    color: settings.headerBackground === 'ec-header-light' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '10px',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.headerBackground === 'ec-header-light' ? '#eee' : 'transparent'
                  }}
                >
                  Light
                </button>
                <button
                  className={`btn-right-sidebar-2 ec-header-dark-to ${settings.headerBackground === 'ec-header-dark' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('headerBackground', 'ec-header-dark')}
                  style={{
                    color: settings.headerBackground === 'ec-header-dark' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '0',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.headerBackground === 'ec-header-dark' ? '#eee' : 'transparent'
                  }}
                >
                  Dark
                </button>
              </div>

              <span 
                className="right-sidebar-2-subtitle"
                style={{ color: '#a6aab4', fontSize: '16px', display: 'block', marginBottom: '10px', marginTop: '10px' }}
              >
                Navigation Background
              </span>
              <div 
                className="no-col-space"
                style={{ 
                  marginBottom: '30px', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <button
                  className={`btn-right-sidebar-2 ec-sidebar-light-to ${settings.navigationBackground === 'ec-sidebar-light' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('navigationBackground', 'ec-sidebar-light')}
                  style={{
                    color: settings.navigationBackground === 'ec-sidebar-light' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '10px',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.navigationBackground === 'ec-sidebar-light' ? '#eee' : 'transparent'
                  }}
                >
                  Light
                </button>
                <button
                  className={`btn-right-sidebar-2 ec-sidebar-dark-to ${settings.navigationBackground === 'ec-sidebar-dark' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('navigationBackground', 'ec-sidebar-dark')}
                  style={{
                    color: settings.navigationBackground === 'ec-sidebar-dark' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '0',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.navigationBackground === 'ec-sidebar-dark' ? '#eee' : 'transparent'
                  }}
                >
                  Dark
                </button>
              </div>

              <span 
                className="right-sidebar-2-subtitle"
                style={{ color: '#a6aab4', fontSize: '16px', display: 'block', marginBottom: '10px', marginTop: '10px' }}
              >
                Spacing Layout
              </span>
              <div 
                className="no-col-space"
                style={{ 
                  marginBottom: '30px', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <button
                  className={`btn-right-sidebar-2 default-spacing-to ${settings.navigationSpacing === 'default' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('navigationSpacing', 'default')}
                  style={{
                    color: settings.navigationSpacing === 'default' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '10px',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.navigationSpacing === 'default' ? '#eee' : 'transparent'
                  }}
                >
                  Default
                </button>
                <button
                  className={`btn-right-sidebar-2 compact-spacing-to ${settings.navigationSpacing === 'compact-spacing' ? 'btn-right-sidebar-2-active' : ''}`}
                  onClick={() => updateSetting('navigationSpacing', 'compact-spacing')}
                  style={{
                    color: settings.navigationSpacing === 'compact-spacing' ? '#ffffff' : '#8a909d',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200',
                    padding: '4px 10px',
                    width: '48%',
                    textAlign: 'center',
                    marginRight: '0',
                    textDecoration: 'none',
                    lineHeight: '21px',
                    border: '0',
                    borderRadius: '15px',
                    backgroundColor: settings.navigationSpacing === 'compact-spacing' ? '#eee' : 'transparent'
                  }}
                >
                  Compact
                </button>
              </div>

              <div 
                className="d-flex justify-content-center"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <button
                  id="reset-options"
                  className="btn-right-sidebar-2 btn-reset"
                  onClick={resetSettings}
                  style={{ 
                    width: 'auto', 
                    cursor: 'pointer',
                    backgroundColor: '#88aaf3',
                    border: '0',
                    color: '#ffffff',
                    lineHeight: '2',
                    borderRadius: '15px',
                    padding: '4px 15px',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: '200'
                  }}
                >
                  Reset Settings
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Settings; 