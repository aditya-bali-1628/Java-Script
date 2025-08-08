public class Employee {
	private String name;
	private int age;
	private String gender;
	
	
	public void setName(String name){
		this.name = name;
	}
	
	public String getName(){
		return name;
	}
	
	public void setAge(int age){
		this.age = age;
	}
	
	public int getAge(){
		return age;
	}
	
	public void setGender(String gender){
		 this.gender = gender;
	}
	
	    public String getGender() {
        return gender;
    }

	public static void main(String[] args){
		Employee emp = new Employee();
		
		emp.setName("aditya");
		emp.setAge(30);
		emp.setGender("male");
		
		System.out.println("Employee Details:");
		System.out.println("Name: " + emp.getName());
		System.out.println("Age: " + emp.getAge());
		System.out.println("Gender: " + emp.getGender());
	}
}