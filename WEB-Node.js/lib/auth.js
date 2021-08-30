module.exports = {
    isOwner: function (request, response) {
        if (request.user) {      //user 객체가 들어가 있다면 실행이 된다.
            return true;
        } else {
            return false;
        }
    }
    , statusUI: function (request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>'
        if (this.isOwner(request, response)) {
            authStatusUI = `${request.user.nickname} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}