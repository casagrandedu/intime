package com.emporio.intime.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.emporio.intime.daos.ClientesDAO;
import com.emporio.intime.entidades.Clientes;
import com.emporio.intime.exceptions.ModelException;

@Path("/clientes")
public class ClientesResource {

	@Inject
	private ClientesDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Clientes> getAll() {
		return dao.getAll();
	}
	
	@GET
	@Path("/pessoasfisicas")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Clientes> getPessoasFisicas() {
		return dao.getPessoasFisicas();
	}
	
	@GET
	@Path("/pessoasjuridicas")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Clientes> getPessoasJuridicas(){
		return dao.getPessoasJuridicas();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Clientes findById(@PathParam("id") Integer idCliente) {
		return dao.findById(idCliente);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Clientes atualizar(Clientes cliente) {
		return dao.atualizar(cliente);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idCliente) {
		try {
			dao.deletar(idCliente);
		} catch (ModelException e) {
			return Response.ok(e.getMessage()).status(Status.BAD_REQUEST).build();
		}
		return Response.ok().status(Status.OK).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Clientes cliente) {
		dao.salvar(cliente);
		return Response.ok(cliente).status(Status.CREATED).build();
	}

}
