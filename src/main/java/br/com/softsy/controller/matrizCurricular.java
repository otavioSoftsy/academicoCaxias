package br.com.softsy.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//import br.com.softsy.model.UsuarioInternoVO;
//import br.com.softsy.utils.LoginUtils;

@Controller
public class matrizCurricular {

	@RequestMapping(value = { "area-conhecimento" }, method = RequestMethod.GET)
	public String areaConhecimento(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/areaConhecimento";
	}

	@RequestMapping(value = { "disciplinas" }, method = RequestMethod.GET)
	public String disciplinas(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/disciplinas";
	}

	@RequestMapping(value = { "nova-disciplina" }, method = RequestMethod.GET)
	public String novaDisciplina(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/novaDisciplina";
	}

	@RequestMapping(value = { "editar-disciplina" }, method = RequestMethod.GET)
	public String editarDisciplina(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/editarDisciplina";
	}

	
	@RequestMapping(value = { "curso" }, method = RequestMethod.GET)
	public String curso(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/cursos";
	}
	
	@RequestMapping(value = { "novo-curso" }, method = RequestMethod.GET)
	public String novoCurso(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/novoCurso";
	}
	 
	@RequestMapping(value = { "editar-curso" }, method = RequestMethod.GET)
	public String editarCurso(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/editarCurso";
	}
	
	@RequestMapping(value = { "curriculo" }, method = RequestMethod.GET)
	public String curriculo(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/curriculo";
	}
	
	@RequestMapping(value = { "novo-curriculo" }, method = RequestMethod.GET)
	public String novoCurriculo(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/novoCurriculo";
	}
		
		
	@RequestMapping(value = { "serie-matriz-curricular" }, method = RequestMethod.GET)
	public String serieMatrizCurricular(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/serie";
	}
	
	@RequestMapping(value = { "turma-matriz-curricular" }, method = RequestMethod.GET)
	public String turmaMatrizCurricular(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/turma";
	}
	
	@RequestMapping(value = { "nova-turma-matriz-curricular" }, method = RequestMethod.GET)
	public String novaTurmaMatrizCurricular(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/novaTurma";
	}
	
	@RequestMapping(value = { "grade-curricular-matriz-curricular" }, method = RequestMethod.GET)
	public String gradeCurricularMatrizCurricular(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/gradeCurricular";
	}
	
	@RequestMapping(value = { "professores" }, method = RequestMethod.GET)
	public String professores(HttpSession session, Model model) throws Exception {

		return "matrizCurricular/professores";
	}

}
