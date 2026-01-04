package me.alexandruc.summerwell.core.ticket_type;

import java.util.List;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TicketTypeService {
    private final TicketTypeRepository ticketRepository;

    public List<TicketType> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<TicketType> getTicketsByYear(Integer year) {
        return ticketRepository.findAllByYear(year);
    }

    public List<TicketType> getTicketsByType(String type) {
        return ticketRepository.findAllByType(type);
    }
    
}
