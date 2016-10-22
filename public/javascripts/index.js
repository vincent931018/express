/**
 * Created by Administrator on 2016/10/22.
 */
$(function() {
    $('.submit').click(function(){
        var params = {
            userName:'',
            password:''
        };
        var userName = $('.userName').val();
        var password = $('.password').val();
        params['userName'] = userName;
        params['password'] = password;
        $.ajax({
            type: 'GET',
            url:'/userList',
            data:params
        }).done(function(result){
            if(result.success){
                location.href='/users';
            }else{
                alert('没有此人');
            }
        })
    })
});