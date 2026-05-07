import React, { useState } from 'react'
import { EditProfile } from '../components/SettingsComponents/EditProfile';
import Preferences from '../components/SettingsComponents/Preferences';
import Security from '../components/SettingsComponents/Security';

function Settings() {

    const [activeTab,setActiveTab]=useState('edit_profile');
    const tabs = [
        {id:'edit_profile',label:'Edit Profile'},
        {id:'preferences',label:'Preferences'},
        {id:'security',label:'Security'},
    ]
  return (
    <div className='mt-7.5 mx-10 bg-white rounded-3xl w-full '>
        
          <div className="flex mt-9 gap-18 ml-8 border-b border-[#F4F5F7] pb-2 [&_>h2]:hover:text-[#2D60FF]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-base font-medium transition-all relative ${
              activeTab === tab.id
                ? "text-[#1814F3]" // Aktif renk
                : "text-[#718EBF] hover:text-[#1814F3]" // Pasif renk
            }`}
          >
            {tab.label}
            {/* Aktif sekmenin altındaki mavi çizgi */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.75 bg-[#1814F3] rounded-t-full" />
            )}
          </button>
        ))}
      </div>
        
        {activeTab==='edit_profile'&&<EditProfile/>}
        {activeTab==='preferences'&&<Preferences/>}
         {activeTab==='security'&&<Security/>}
    </div>
  )
}

export default Settings