package com.example.employeemanagement;
import java.util.*;
import java.util.stream.Collectors;


public class Employee{
       private  String name;
       private  String designation;
       private    int salary;

       public Employee() {
            super();
        }
        public Employee(String name, String designation, int salary) {
            super();
            this.name = name;
            this.designation = designation;
            this.salary = salary;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getDesignation() {
            return designation;
        }
        public void setDesignation(String designation) {
            this.designation = designation;
        }
        public int getSalary() {
            return salary;
        }
        public void setSalary(int salary) {
            this.salary = salary;
        }
        public class MainClass {
            static List<Employee>list = new ArrayList<Employee>();
            public static void addEmployee(Employee emp) {
                list.add(emp);
                System.out.println("Employee added");
            }
            public static void getEmployees() {
                List <Employee> ans =  list.stream().sorted(Comparator.comparingInt(Employee::getSalary)
                        .reversed()).collect(Collectors.toList());
                System.out.println("Name  Designation  Salary");
                for (int i= 0; i< 3; i++) {
                    System.out.println(ans.get(i).getName() + "" + ans.get(i).getDesignation() + "" + ans.get(i).getSalary());
                }
            }
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                System.out.println("Enter 1 to add employee");
                System.out.println("Enter 2 to print top 4 earners");
                System.out.println("Enter 3 to exit");
                boolean x = true;
                while (x) {
                    int op = sc.nextInt();
                    if (op== 1) {
                        String name = sc.next();
                        String designation = sc.next();
                        int salary = sc.nextInt();
                        addEmployee(new Employee(name, designation, salary));
                    } else if (op == 2) {
                        getEmployees();
                    } else if (op == 3) {
                        System.out.println("Exited");
                        x = false;
                    }
                }
            }
        }

    }
