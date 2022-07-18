package com.ironhack.lsb78.controller.Impl;

import com.ironhack.lsb78.Repository.EmployeeRepository;
import com.ironhack.lsb78.controller.Interfaces.EmployeeInterface;
import com.ironhack.lsb78.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class EmployeeInterfaceImpl implements EmployeeInterface {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    @ResponseStatus(HttpStatus.OK)
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }
   
}
