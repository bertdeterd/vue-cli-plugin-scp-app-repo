module.exports = (api, options, rootOptions) => {
    // modify package.json fields
    api.extendPackage({
        scripts: {
            deploy: " cf html5-push xx"
        },
        dependencies: {
            "saprfc":"*"
        }
    })

    // copy and render all files in ./templates (include options with ejs)
    api.render('./template', { ...options })

}
