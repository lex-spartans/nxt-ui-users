#!/bin/bash

# Function to set npm registry
set_npm_registry() {
    echo "Setting npm registry to $1..."
    npm config set registry "$1"
}

# Function to remove node_modules and package-lock.json
clean_project() {
    echo "Removing existing node_modules and package-lock.json..."
    rm -rf node_modules/ package-lock.json .angular/ dist/ documentation/
    npm cache clean --force
}

# Remove the line containing "SmartPaymentServices/nxt-ui-library" from package.json
echo "Removing the line containing 'SmartPaymentServices/nxt-ui-library' from package.json (if it exists)..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' '/SmartPaymentServices\/nxt-ui-library/d' package.json  # macOS
else
    sed -i '/SmartPaymentServices\/nxt-ui-library/d' package.json  # Linux/UNIX
fi

# Ask if the user wants to do a local installation
read -p "Do you want to do a local installation of the library? (y/n): " LOCAL_INSTALL

if [[ "$LOCAL_INSTALL" == "y" ]]; then
    read -p "Please enter the local path of the library to install: " LOCAL_PATH

    set_npm_registry "https://npm.pkg.github.com/"
    clean_project

    set_npm_registry "https://registry.npmjs.org/"
    echo "Installing project dependencies..."
    npm install

    echo "Installing the library from the local path: $LOCAL_PATH..."
    npm install "$LOCAL_PATH"

else
    read -p "Enter the version of @smartpaymentservices/nxt-ui-library you want to install (leave empty to install the latest version): " version

    set_npm_registry "https://npm.pkg.github.com/"
    echo "Uninstalling the current version of @smartpaymentservices/nxt-ui-library (if any)..."
    npm uninstall @smartpaymentservices/nxt-ui-library
    clean_project

    set_npm_registry "https://registry.npmjs.org/"
    echo "Installing project dependencies..."
    npm install

    set_npm_registry "https://npm.pkg.github.com/"
    if [[ -z "$version" ]]; then
        echo "No version provided. Installing the latest version of @smartpaymentservices/nxt-ui-library..."
        npm install @smartpaymentservices/nxt-ui-library@latest --legacy-peer-deps
    else
        echo "Installing @smartpaymentservices/nxt-ui-library@$version..."
        npm install @smartpaymentservices/nxt-ui-library@"$version" --legacy-peer-deps
    fi
fi

set_npm_registry "https://registry.npmjs.org/"
echo "Installation complete!"
