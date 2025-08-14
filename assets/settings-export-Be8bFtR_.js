import{a as s}from"./main-D9O-0MtM.js";function n(){const t=s();return{metadata:{exportedAt:new Date().toISOString(),version:"1.0",appName:"Pragmatic Focus Time Tracker",format:"settings-export"},settings:{timeRounding:t.timeRounding??null,durationThreshold:t.durationThreshold??150,categories:t.categories||[],defaultExportPath:t.defaultExportPath}}}function r(){const t=n(),i={"// Metadata":"Export information",metadata:t.metadata,"// Settings":"Application configuration",settings:{"// Time rounding in seconds (null = no rounding, 300 = 5 minutes)":"",timeRounding:t.settings.timeRounding,"// Minimum duration threshold in seconds for entries to be saved":"",durationThreshold:t.settings.durationThreshold,"// Default export path for files":"",defaultExportPath:t.settings.defaultExportPath||null,"// Activity categories with subcategories":"",categories:t.settings.categories.map(e=>({id:e.id,label:e.label,icon:e.icon,color:e.color,subcategories:e.subcategories||[]}))}};return JSON.stringify(i,null,2)}function d(){const t=n();let i=`# Pragmatic Focus Time Tracker - Settings Export
# Exported on: ${new Date().toLocaleString()}
# Version: ${t.metadata.version}

# Time rounding settings
# null = no rounding, 300 = round to 5 minutes, etc.
timeRounding: ${t.settings.timeRounding===null?"null":t.settings.timeRounding}

# Minimum duration threshold in seconds
# Entries shorter than this will be discarded
durationThreshold: ${t.settings.durationThreshold}

# Default export path for files
${t.settings.defaultExportPath?`defaultExportPath: "${t.settings.defaultExportPath}"`:"# defaultExportPath: null"}

# Activity categories
categories:
`;return t.settings.categories.forEach(e=>{i+=`  - id: "${e.id}"
    label: "${e.label}"
    icon: "${e.icon}"
    color: "${e.color}"
`,e.subcategories&&e.subcategories.length>0?(i+=`    subcategories:
`,e.subcategories.forEach(o=>{i+=`      - "${o}"
`})):i+=`    subcategories: []
`}),i}function l(){const t=n();let i=`# Pragmatic Focus Time Tracker - Settings Export
# Exported on: ${new Date().toLocaleString()}
# Version: ${t.metadata.version}

[metadata]
exportedAt = "${t.metadata.exportedAt}"
version = "${t.metadata.version}"
appName = "${t.metadata.appName}"
format = "${t.metadata.format}"

[settings]
# Time rounding in seconds (0 = no rounding, 300 = 5 minutes)
timeRounding = ${t.settings.timeRounding??0}

# Minimum duration threshold in seconds for entries to be saved
durationThreshold = ${t.settings.durationThreshold}

# Default export path for files
${t.settings.defaultExportPath?`defaultExportPath = "${t.settings.defaultExportPath}"`:'# defaultExportPath = ""'}

`;return t.settings.categories.forEach(e=>{i+=`[[categories]]
id = "${e.id}"
label = "${e.label}"
icon = "${e.icon}"
color = "${e.color}"
subcategories = [${e.subcategories?.map(o=>`"${o}"`).join(", ")||""}]

`}),i}function u(){const t=n();let i=`PRAGMATIC FOCUS TIME TRACKER - SETTINGS SUMMARY
===============================================

Exported: ${new Date().toLocaleString()}
Version: ${t.metadata.version}

TIME SETTINGS
-------------
Time Rounding: ${t.settings.timeRounding===null||t.settings.timeRounding===0?"Disabled (no rounding)":t.settings.timeRounding?`${t.settings.timeRounding} seconds (${Math.floor(t.settings.timeRounding/60)} minutes)`:"Disabled (no rounding)"}

Duration Threshold: ${t.settings.durationThreshold||150} seconds (${Math.floor((t.settings.durationThreshold||150)/60)} minutes ${(t.settings.durationThreshold||150)%60} seconds)
  - Entries shorter than this are automatically discarded

Default Export Path: ${t.settings.defaultExportPath||"Not set"}

ACTIVITY CATEGORIES (${t.settings.categories.length})
${"-".repeat(20+t.settings.categories.length.toString().length)}

`;return t.settings.categories.forEach((e,o)=>{i+=`${o+1}. ${e.label} ${e.icon}
   ID: ${e.id}
   Color: ${e.color}
   Subcategories: ${e.subcategories?.length?e.subcategories.join(", "):"None"}

`}),i+=`
IMPORT INSTRUCTIONS
===================
To restore these settings:
1. Go to Settings → Import
2. Select the exported file
3. Choose whether to merge with or replace current settings
4. Confirm the import

The YAML format is recommended for manual editing.
The JSON format is best for programmatic access.
The TOML format works well with configuration management tools.
`,i}function g(t){return`pragmatic-focus-settings-${new Date().toISOString().slice(0,16).replace(/[T:]/g,"-")}.${t}`}function m(t){return{json:"application/json",yaml:"text/yaml",toml:"text/toml",txt:"text/plain"}[t]}export{r as exportSettingsAsJSON,l as exportSettingsAsTOML,u as exportSettingsAsText,d as exportSettingsAsYAML,g as getSettingsExportFilename,m as getSettingsExportMimeType,n as getSettingsForExport};
