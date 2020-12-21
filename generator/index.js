module.exports = (api, options, rootOptions) => {
    // modify package.json fields
    api.extendPackage({
        scripts: {
            predeploy: "npm run build",
            deploy: "cf html5-push -d ./dist"
        },
        dependencies: {
            "saprfc":"*"
        }
    })

    // copy and render all files in ./templates (include options with ejs)
    api.render('./template', { ...options })

}
