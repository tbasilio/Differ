// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    $(document).on('click', '.comment-cancel', function() {
      return $(this).parents('tr').remove();
    });
    return $('.line').click(function(e) {
      var comment, comment_textarea, info, name;
      info = $(e.target).parents('tr').data();
      comment = $('#line-comment_template').clone();
      comment_textarea = comment.find('textarea');
      name = "comments[" + info.file + "][" + info.line_number + "]";
      comment_textarea.attr('name', name);
      return comment.insertAfter($(e.target).parent('tr')).show();
    });
  });

}).call(this);