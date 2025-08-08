public class EvenOddSquareCube {
	public static void main(String[] args){
	int i = 1;
	while(i <= 100){
		if(i % 2 == 0){
			System.out.println(i +" is even -> square = " + (i * i));
		}else{
			System.out.println(i + "is odd -> cube = " + (i * i * i));
		}
		i++;
	}
  }

}
