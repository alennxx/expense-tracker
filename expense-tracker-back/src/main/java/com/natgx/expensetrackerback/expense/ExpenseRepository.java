package com.natgx.expensetrackerback.expense;

import org.springframework.data.repository.Repository;

import java.util.ArrayList;
import java.util.List;

interface ExpenseRepository extends Repository<Expense, Long> {
    void save(Expense expense);
    List<Expense> findAll();
}

class InMemoryExpenseRepository implements ExpenseRepository {
    private final List<Expense> store = new ArrayList<>();

    @Override
    public void save(Expense expense) {
        store.add(expense);
    }

    @Override
    public List<Expense> findAll() {
        return new ArrayList<>(store);
    }

}