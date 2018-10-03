//This seems to be cool. Teach me?

document.addEventListener('DOMContentLoaded', function() {
$('button').on('click',function(){
    $.get('https://www.codechef.com/contests', function(data) {
        var $doc = $(data);
        var $table=$doc.find('.table-questions').eq(0).find('tbody').find('tr');
        var length=$table.length;
        $('.codechef').empty();
        for(var i=1;i<length;i++)
        {
    	    var $contest=$table.eq(i).find('td');
            var input=$('<p>'+'<strong>Name:&nbsp;</strong>'+$contest.eq(1).text()+'</br>'+'<strong>Start:&nbsp;</strong>'+$contest.eq(2).text()+'</p>');
    	    $('.codechef').append(input);
        }
    });
    $.get('http://codeforces.com/profile/god_zoned', function(data) {
        var $doc = $(data);
        var $contests=$doc.find('.contest-state-phase');
        var length=$contests.length;
        $('.codeforces').empty();
        for(var i=0;i<length;i++)
        {
            var input=$('<p>'+'<strong>Name:&nbsp;</strong>'+$contests.eq(i).siblings('a').text()+'</br>'+'<strong>Start:&nbsp;</strong>'+$contests.eq(i).siblings('.countdown').text()+'</p>');
            $('.codeforces').append(input);
        }
    });

});
}, true);