package com.example.demo.controller;

import com.example.demo.applications.LancheApplication;
import com.example.demo.entities.Lanche;
import com.example.demo.facade.LancheFacade;
import com.example.demo.repositories.LancheRepository;
import com.example.demo.services.LancheService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LancheController {
    private static LancheRepository lancheRepository;
    private static LancheService lancheService;
    private static LancheApplication lancheApplication;
    private static LancheFacade lancheFacade;

    private static void injetarDependencias() {
        lancheRepository = new LancheRepository();
        lancheService = new LancheService();
        lancheApplication = new LancheApplication(lancheService, lancheRepository);
        lancheFacade = new LancheFacade(lancheApplication);
    }

    public LancheController(){
        injetarDependencias();

        Lanche lanche1 = new Lanche(1,"Lanche 1",  10.0, "");
        Lanche lanche2 = new Lanche(2,"Lanche 2", 10.0, "");
        Lanche lanche3 = new Lanche(3,"Lanche 3", 10.0, "");

        this.lancheFacade.cadastrar(lanche1);
        this.lancheFacade.cadastrar(lanche2);
        this.lancheFacade.cadastrar(lanche3);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Lanche> cadastra(@RequestBody Lanche lanche){
        lancheFacade.cadastrar(lanche);
        return ResponseEntity.status(HttpStatus.CREATED).body(lanche);
    }

    @GetMapping("/listarLanche")
    public List<Lanche> listar(){
        return lancheFacade.buscar();
    }

    @GetMapping("calcularLanche/{cod}/{qtd}")
    public double calcularLanche(@PathVariable Integer cod, @PathVariable Integer qtd){

        if(cod == null || qtd == null){
            throw new IllegalArgumentException("Os parâmetros são obrigatórios!");
        }

        Lanche lanche = lancheFacade.buscarPorCodigo(cod);

        if (lanche == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Lanche não encontrado");
        }

         return lancheFacade.calcularLanche(lanche, qtd);
    }

    @DeleteMapping("/excluirLanche/{cod}")
    public ResponseEntity<?> excluir(@PathVariable Integer cod){
        if(cod == null){
            throw new IllegalArgumentException("Os parâmetros são obrigatórios!");
        }

        this.lancheApplication.remover(cod);

        return ResponseEntity.noContent().build();

    }

    @PutMapping("/atualizarLanche/{cod}")
    public ResponseEntity<Lanche> atualizarLanche(@PathVariable Integer cod, @RequestBody Lanche lancheAtualiz) {
        if (cod == null) {
            throw new IllegalArgumentException("Os parâmetros são obrigatórios!");
        }

        Lanche lancheExist = lancheFacade.buscarPorCodigo(cod);

        if (lancheExist == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        if (lancheAtualiz.getNome() != null) {
            lancheExist.setNome(lancheAtualiz.getNome());
        }

        if (lancheAtualiz.getPreco() != null) {
            lancheExist.setPreco(lancheAtualiz.getPreco());
        }

        if (lancheAtualiz.getImagem() != null) {
            lancheExist.setImagem(lancheAtualiz.getImagem());
        }

        return ResponseEntity.status(HttpStatus.OK).body(lancheExist);
    }

}
