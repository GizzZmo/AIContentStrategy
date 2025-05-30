import java.util.*;

public class AICompanion {
    private List<String> conversationHistory = new ArrayList<>();

    public String chat(String userInput) {
        conversationHistory.add(userInput);
        // Call to NLU and AI model (placeholder)
        String aiResponse = "This is a context-aware response.";
        conversationHistory.add(aiResponse);
        return aiResponse;
    }

    public List<String> getConversationHistory() {
        return conversationHistory;
    }
}
