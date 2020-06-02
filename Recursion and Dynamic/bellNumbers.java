public class MyClass {
    public static void main(String args[]) {
      int x=4;
      System.out.println(bellNumbers(x));
    }
    
    
    static int bellNumbers(int n){
        //First mke a table
        int [][] bellArr = new int [n+1][n+1];
        bellArr[0][0] = 1;
        
        for(int i = 1; i <= n; i++){
            bellArr[i][0] = 0;
            for (int j = 0; j <=i ;j++){
                //Explicity fill for j = 0:
                if(j==0)
                   bellArr[i][j] = bellArr[i-1][i-1];
                else
                bellArr[i][j] =bellArr[i-1][j-1] + bellArr[i][j-1] ;
            }
        }
        
        return bellArr[n][0];
    }
}