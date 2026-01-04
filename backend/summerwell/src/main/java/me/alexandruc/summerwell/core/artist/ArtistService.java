package me.alexandruc.summerwell.core.artist;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArtistService {
    private final ArtistRepository artistRepository;

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }
    
    public List<Artist> getArtistsByDay(Integer day) {
        return artistRepository.findAllByDayNumber(day);
    }
}