package com.victorparma.cursomc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victorparma.cursomc.domain.Estado;
import com.victorparma.cursomc.repositories.EstadoRepository;

@Service
public class EstadoService {
	@Autowired
	private EstadoRepository repo;
	
	
	public List<Estado> findAll(){
		return repo.findAllByOrderByNome();
	}
}
