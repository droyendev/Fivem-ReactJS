fx_version 'cerulean'

version '1.0.0'
description 'Basic React (TypeScript) & Lua Template'

lua54 'yes'

games {
    'gta5',
    'rdr3'
}

ui_page 'web/build/index.html'

client_script 'client/**/*'
server_script 'server/**/*'

files {
    'web/build/index.html',
    'web/build/**/*'
}