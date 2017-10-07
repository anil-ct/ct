package com.ct;

class Test1 extends Thread {
	public void run() {
		System.out.println("Thread " + currentThread().getId() + currentThread().getName()  + " is running");

	}
}

public class Test {
	public static void main(String[] args) {
		Test1 t = new Test1();
		t.start();
		System.out.println("Thread " + t.getId());
	}
}
