
public class Stock {
	public static void main(String[] args) {
		// Variable Definition
		int[] prices = { 498, 501, 470, 489 };
		int[] answer = {};
		int count = 0;

		for (int i = 0; i < prices.length; i++) {
			for (int j = 0; j < prices.length - 1; j++) {
				if (prices[j] >= prices[j + 1]) {
					count ++;
					continue;
				} else {
					count = 0;
					answer = new int[count];
					break;
				}
				
			}
			answer = new int[count];
			
		}

		for (int i = 0; i < answer.length; i++) {
			System.out.println(answer[i]);
		}
	}

}
