call tsc -p ./tsconfig.json
call cpx ./**/*.json ../../schematics
call cpx ../../schematics/**/* ../../../../dist/tick-viewer/schematics
