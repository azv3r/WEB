function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    var cnt = 0;
    return () => {
    	return ++cnt;
    	
    	console.log(cnt);
    	       
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5