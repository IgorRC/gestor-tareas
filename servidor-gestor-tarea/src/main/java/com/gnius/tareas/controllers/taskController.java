package com.gnius.tareas.controllers;

import com.gnius.tareas.entites.Task;
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
    public List<Task> getTarea(){
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task(
                "ir al mercado",
                "llevas 50 soles y sacar la basura antes de salir :3",
                false));
        return tasks;
    }
}
