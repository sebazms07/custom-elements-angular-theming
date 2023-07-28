YELLOW='\033[1;33m'
NC='\033[0m'
source theme_variable.config
echo "tema actual: "$currentTheme" selector actual: "$currentThemeSelector


changeThemeVariable(){
    find ../src/app/components/*/*.scss -type f -name '*.scss' -exec sed -i '' s/$currentTheme/$1/g {} +
    find ./theme_variable.config -type f -name '*.config' -exec sed -i '' s/$currentTheme/$1/g {} +
    find ../package.json -type f -name '*.json' -exec sed -i '' s/$currentThemeComponentLibrary/$3/g {} +
    find ./theme_variable.config -type f -name '*.config' -exec sed -i '' s/$currentThemeComponentLibrary/$3/g {} +
    # find ../src/main.ts -type f -name '*.ts' -exec sed -i '' s/$currentThemeSelector/$2/g {} +
    # find ./theme_variable.config -type f -name '*.config' -exec sed -i '' s/$currentThemeSelector/$2/g {} +
    find ../src/main.ts -type f -name '*.ts' -exec sed -i '' s/$currentComponentLibrary/$4/g {} +
    find ./theme_variable.config -type f -name '*.config' -exec sed -i '' s/$currentComponentLibrary/$4/g {} +
}
case $1 in 
    --design-system-a | -a)
        echo "cambiando a design system A"
        changeThemeVariable "design-system-a" "custom-a-" "desing-system-components-a" "DesignSystemComponentsA"

    ;;
    --design-system-b | -b)
        echo "cambiando a design system B"
        changeThemeVariable "design-system-b" "custom-b-" "desing-system-components-b" "DesignSystemComponentsB"
    ;;
    *)
        echo "\n Debes agregar alguna bandera referenciando a un tema de la marca \n
        ${YELLOW}`basename $0`:\n usage:${NC} [ --bancolombia-design-system | -bds <bancolombia> ] || [ --sufi-design-system | -sufi <sufi> ] \n
        
        "
        ;;
esac