import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { EditProfile } from '../components/SettingsComponents/EditProfile';
import Preferences from '../components/SettingsComponents/Preferences';
import Security from '../components/SettingsComponents/Security';

function Settings() {
  const tabs = [
    { id: 'edit_profile', label: 'Edit Profile', path: '/settings/edit-profile' },
    { id: 'preferences', label: 'Preferences', path: '/settings/preferences' },
    { id: 'security', label: 'Security', path: '/settings/security' },
  ];

  return (
    <div className="mt-7.5 mx-10 bg-white rounded-3xl w-full p-8 min-h-175">
      {/* Sekme Başlıkları (Tab Headers) */}
      <div className="flex gap-18 border-b border-[#F4F5F7] mb-8">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className="pb-3 text-base font-medium transition-all relative text-[#718EBF] hover:text-[#1814F3]"
            // Aktif olduğunda uygulanacak sınıflar:
            activeClassName="text-[#1814F3]"
            // Alt çizgiyi aktif olduğunda gösteren stil:
            activeStyle={{
              boxShadow: "0 3px 0 0 #1814F3" 
            }}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      {/* Sekme İçerikleri (Tab Content) */}
      <div className="mt-8">
        <Switch>
          {/* Settings ana sayfasına gelince otomatik olarak Edit Profile'a yönlendirir */}
          <Route exact path="/settings">
            <Redirect to="/settings/edit-profile" />
          </Route>
          
          <Route path="/settings/edit-profile">
            <EditProfile />
          </Route>
          
          <Route path="/settings/preferences">
            <Preferences />
          </Route>
          
          <Route path="/settings/security">
            <Security />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Settings;