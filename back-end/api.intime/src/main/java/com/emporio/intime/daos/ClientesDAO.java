package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.emporio.intime.entidades.Clientes;
import com.emporio.intime.entidades.Pedidos;
import com.emporio.intime.exceptions.ModelException;

@Stateless
public class ClientesDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;
	
	@Inject
	private PedidosDAO pedidoDao;
	
	@Inject
	
	public List<Clientes> getAll(){
		return manager.createQuery("select c from Clientes c", Clientes.class).getResultList();
	}
	
	public List<Clientes> getPessoasFisicas(){
		return manager.createQuery("select c from Clientes c WHERE c.tipoPessoa = 'Fisica'", Clientes.class).getResultList();
	}
	
	public List<Clientes> getPessoasJuridicas(){
		return manager.createQuery("select c from Clientes c WHERE c.tipoPessoa = 'Juridica'", Clientes.class).getResultList();
	}
	
	public Clientes salvar(Clientes cliente){
		manager.persist(cliente);
		return cliente;
	}
	
	public Clientes atualizar(Clientes cliente) {
		manager.merge(cliente);
		return cliente;
	}

	public void deletar(Integer idCliente) throws ModelException {
		Clientes cliente = manager.find(Clientes.class, idCliente);

		if (cliente != null) {
			List<Pedidos> pedidos = pedidoDao.buscarPorPropriedade("Where idCliente = ", idCliente);
			
			if (pedidos != null && !pedidos.isEmpty()) {
				throw new ModelException("Cliente " + idCliente + " não pode ser removido.");
			}
			
			manager.remove(cliente);
		}
	}

	public Clientes findById(Integer idCliente) {
		return manager.find(Clientes.class, idCliente);
	}

}
