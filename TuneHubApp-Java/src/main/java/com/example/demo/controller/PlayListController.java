package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.example.demo.entities.PlayList;
import com.example.demo.entities.Songs;
import com.example.demo.services.PlayListService;
import com.example.demo.services.SongsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PlayListController 
{
	@Autowired
	PlayListService pserv;
	
	@Autowired
	SongsService sserv;
	
	@GetMapping("/createplaylist")
	public List<Songs> createPlayList(Model model) {
		
		//Fetching the songs using song service
		List<Songs> songslist=sserv.fetchAllSongs();
		//sending songslist
		return songslist;
	}
	
	@PostMapping("/addplaylist")
	public String addPlayList(@RequestBody PlayList playlist) {
		//checking playlist exists
		boolean status=pserv.getPlaylist(playlist.getName());
		if(!status) {
			
			//adding playlist
			pserv.addPlaylist(playlist);
			
			//update song table
			List<Songs> songsList= playlist.getSongs();
			for(Songs song : songsList) {
				song.getPlaylist().add(playlist);
				sserv.updateSong(song);
			}	

			return "adminhome";
			
		}else {
			return "createplaylistfail";
		}
	}
	
	
	@GetMapping("/viewPlaylists")
	public List<PlayList> viewPlaylists() {
		List<PlayList> plist= pserv.fetchPlaylists();
		return plist;
	}
	
}










