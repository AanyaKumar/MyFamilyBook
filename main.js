var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.pinimg.com/originals/d4/1f/09/d41f094d518ebe9738f8eb1392ce31a5.jpg", "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36150692.jpg" , "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg",  "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://media.istockphoto.com/illustrations/reading-magazine-illustration-id164538862"];
var names = ["Family Book","Kuldip Kumar ", "Akshay Kumar", "Urmila Kumar", "Ritu kumar", "aanya kumar"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
