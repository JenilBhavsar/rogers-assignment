import java.util.Scanner;

public class TaskOne {
    /*
    * Pattern Function
    * Parameters: 
    * n-integer: height of triangle
    */
    public static void pattern(int n){
        for(int i=0; i<n; i++){
            for(int j=n-i; j>1; j--){
                System.out.print(" ");
            }
            for(int j=0; j<=i; j++ ){
                System.out.print("* ");
            }
            System.out.println("");
        }
    }
    
    /*
    * Main Function
    */
      public static void main(String[] args) {
            try (Scanner in = new Scanner(System.in)) {
                System.out.println("Enter the height of the triangle:");
                int x = in.nextInt();
                in.close();
                System.out.println("Printing the triangle:");
                pattern(x);
            } catch (Exception e) {
                System.out.println("Enter valid number as height");
            }
    }
}
