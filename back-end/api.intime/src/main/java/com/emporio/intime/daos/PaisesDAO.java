package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.emporio.intime.entidades.Paises;

@Stateless
public class PaisesDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;

	public List<Paises> getAll() {
		return manager.createQuery("select p from Paises p", Paises.class).getResultList();
	}

	public Paises salvar(Paises pais) {
		manager.persist(pais);
		return pais;
	}

	public Paises atualizar(Paises pais) {
		manager.merge(pais);
		return pais;
	}

	public void deletar(Integer idPais) {
		Paises pais = manager.find(Paises.class, idPais);

		if (pais != null) {
			manager.remove(pais);
		}
	}

	public Paises findById(Integer idPais) {
		return manager.find(Paises.class, idPais);
	}

}
