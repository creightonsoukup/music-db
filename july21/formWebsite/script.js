
$("#favoriteColor").on("change", function (event) {
  var favoriteColor = $(this).val();
  $("body").css("background-color", favoriteColor)
})

var colors = {
  Pink : "you have a deep need to be accepted and loved unconditionally.",
  Yellow: "you have a deep need for logical order in your everyday life and to be able to express your individuality by using your logical mind to inspire and create new ideas.",
  Red: "you are action oriented with a deep need for physical fulfillment and to experience life through the five senses.",
  Orange: "you have a great need to be with people, to socialize with them, and be accepted and respected as part of a group. You also have a need for challenges in your life, whether it is physical or social challenges.",
  Green: "you have a deep need to belong, to love and be loved, and to feel safe and secure. You need acceptance and acknowledgment for the everyday things you do for others - just a 'thank you' is sufficient.",
  Blue: "have a deep need to find inner peace and truth, to live their life according to their ideals and beliefs without having to change their inflexible viewpoint of life to satisfy others.",
  Purple: "you have a deep need for emotional security and to create order and perfection in all areas of your life, including your spiritual life. You also have a deep need to initiate and participate in humanitarian projects, helping others in need."
}

$("#favoriteColor").on("change", function (event) {
  var value = $(this).val();
  $("#colorDescription").text(colors[value])
})
