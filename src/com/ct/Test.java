package com.ct;

public class Test {
	private String msg;

	public Test() {
		this.msg = "Hello";
	}

	public static void main(String[] args) {
		Test t = new Test();
		System.out.println(t.msg);
	}
}
