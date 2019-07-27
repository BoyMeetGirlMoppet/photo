        //查找 用户名 密码 邮箱 及去确定密码
        var uname = document.getElementsByName("uname")[0];
        var upwd = document.getElementsByName("upwd")[0];
        var cpwd = document.getElementsByName("cpwd")[0];
        var e_mail = document.getElementsByName("uemail")[0];
        //失去焦点时  如果内容为空 提示...
        uname.onblur = function () {
            var reg = /^\w{6,12}$/;
            regExp.call(this, reg);
        }
        upwd.onblur = function () {
            var reg = /^\w{6,12}$/;
            regExp.call(this, reg);
        }
        cpwd.onblur = function () {
            var reg = /^\w{6,12}$/;
            regExp.call(this, reg);
        }
        e_mail.onblur = function () {
            var reg = /^\w+@\w+\.\w+(\.cn)?$/;
            regExp.call(this, reg);
        }

        function regExp(reg) {
            var p = this.parentNode.children[2];
            var sp = this.parentNode.children[1];
            if (reg.test(this.value) == true) {
                sp.className = "regExp_success";
                p.className="";
                p.innerHTML=""
            } else {
                p.className = "regExp_fail";
                p.innerHTML = "请输入正确的格式";
                this.value = "";
                sp.className=""
            }

        }