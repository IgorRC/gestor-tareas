package com.gnius.tareas.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class taskController {

    @GetMapping("/prueba")
    public String prueba(){
        return "hola mundo";
    }

    @GetMapping("/tarea")
    public List<String> getTarea(){
        List<String> tareas = new ArrayList<>();
        tareas.add("1.- Comprar");
        tareas.add("2.- Imprimir");
        tareas.add("3.- Imprimir");
        return tareas;
    }
}
