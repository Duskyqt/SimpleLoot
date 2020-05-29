Pre-Requisites
- Install Visual Studio Code - https://code.visualstudio.com/download
- Install Node - https://nodejs.org/en/download/

Getting Started
- Install node modules
-- Open the npm terminal
-- Send command - npm install
- Setup your VS Code build task to build by itself.
-- Ctrl+B can be used, or you can bind it to the desired keybind in the vs code preferences, look for Build Task keybind.
- Make a Link to your AddOns folder.
-- Open up command prompt.
-- Send command - mklink /j "PATH_TO_ADDONS\AddonName" "PATH_TO_TYPESCRIPT_ADDON\AddOn"

MkLink
- Syntax : mklink /j "PATH_TO_ADDONS\AddonName" "PATH_TO_TYPESCRIPT_ADDON\AddOn"
- Example : mklink /j "C:\Program Files\World of Warcraft\_retail_\Interface\AddOns\AddonName" "C:\Users\MyUser\Documents\GitHub\typescript-addon\AddOn"