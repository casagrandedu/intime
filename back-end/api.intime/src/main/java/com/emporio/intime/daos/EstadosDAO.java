package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.emporio.intime.entidades.Estados;

@Stateless
public class EstadosDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;

	public List<Estados> getAll() {
		return manager.createQuery("select e from Estados e", Estados.class).getResultList();
	}

	public Estados salvar(Estados estado) {
		manager.persist(estado);
		return estado;
	}

	public Estados atualizar(Estados estado) {
		manager.merge(estado);
		return estado;
	}

	public void deletar(Integer idEstado) {
		Estados estado = manager.find(Estados.class, idEstado);

		if (estado != null) {
			manager.remove(estado);
		}
	}

	public Estados findById(Integer idEstado) {
		return manager.find(Estados.class, idEstado);
	}

}
