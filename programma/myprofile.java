package myprofile;

class Person {
  String name;
  int age;
  String country;
  public void Person(){
    name = "ryugen";
    age = 18;
    country = "indonesia";
  }
  public static String getBio(){
    return "I'm Ryugen, I enjoy collaborating with friends on Git and Github."+ 
    "I gain valuable experience by solving issues with bugs and adding new features."+
    "I prefer working on small features as my abilities aren't as strong as my friends, who help me improve.";
  }
}
