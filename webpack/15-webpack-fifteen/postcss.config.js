module.exports = {
    plugins:[require('autoprefixer')({
        overrideBrowserslist:[
            "defaults",
            "Android 4.1",
            "Chrome>31",
            "ff>31",
            "ie>=8",
            "last 2 versions",
            ">0%"
        ]
    })]
}