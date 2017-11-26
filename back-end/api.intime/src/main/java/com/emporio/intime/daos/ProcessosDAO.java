package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.emporio.intime.entidades.Processos;

@Stateless
public class ProcessosDAO {

	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;

	public List<Processos> getAll() {
		return manager.createQuery("select p from Processos p", Processos.class).getResultList();
	}

	public Processos salvar(Processos processo) {
		manager.persist(processo);
		return processo;
	}

	public Processos atualizar(Processos processo) {
		manager.merge(processo);
		return processo;
	}

	public void deletar(Integer idProcesso) {
		Processos processo = manager.find(Processos.class, idProcesso);

		if (processo != null) {
			manager.remove(processo);
		}
	}

	public Processos findById(Integer idProcesso) {
		return manager.find(Processos.class, idProcesso);
	}
}
