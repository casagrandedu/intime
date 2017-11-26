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

import com.emporio.intime.daos.EstadosDAO;
import com.emporio.intime.entidades.Estados;

@Path("/estados")
public class EstadosResource {
	
	@Inject
	private EstadosDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Estados> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Estados findById(@PathParam("id") Integer idEstado) {
		return dao.findById(idEstado);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Estados atualizar(Estados estado) {
		return dao.atualizar(estado);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idEstado) {
		dao.deletar(idEstado);
		return Response.ok().status(Status.OK).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Estados estado) {
		dao.salvar(estado);
		return Response.ok(estado).status(Status.CREATED).build();
	}


}
